"use server"

import {z} from "zod"
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import paths from "@/paths";

import prisma from "../../prisma";
import {revalidatePath} from "next/cache";

// TODO Define a Schema

const createTopicSchema = z.object({



    name: z.string().nonempty("Title is Required").min(3).regex(/^[a-zA-Z]+$/,
        {message: "Name must only contains letters"}),
    description: z.string().nonempty("Description is required").min(10)
})

export async function createTopic(formState, formData) {



   await new Promise((resolve, reject)=>{

        setTimeout(()=>{
            console.log("Arbitary Code Execution...")
            resolve("TESTIGN 123")
        },5000)
    })

    const session = await getServerSession();

    const name = formData.get("name");
    const description = formData.get("description");

    const currentState = {name, description}

    let result = createTopicSchema.safeParse({name: name, description: description})


    if (!result.success) {
        console.log("FORM ERRORS")
        // console.log(result.error.flatten().fieldErrors)
        return {
            ...currentState,
            errors: result.error.flatten().fieldErrors
        }
    }

//     TODO Sending Errors back to the Form with useFormHook

    console.log("FOrm Submitted Sucessfully")

    // TODO If form is valid but Checking User is loggedIn

    console.log("Currretnyl user logged in is ", session)

    if (!session || !session.user) {

        return {
            ...currentState,
            errors: {
                _form: ["You must be signed in in order to create Topic"]
            }
        }
    }

    let topic;

    // TODO Trying to Save to the Database

    try {

        // throw new Error("Failed to Create Topic")

        topic = await prisma.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description,
            }
        })

        console.log("Saved Data Object is ", topic)

    } catch (err) {

        console.log("Error ", err)

        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ["Something Went Wong On Server"]
                }
            }
        }

    }

    // TODO Revalidate Home Page
    revalidatePath("/")

    redirect(paths.topicShow(topic.slug))

    // TODO IF there is no error
    return {
        errors: {}
    }


}


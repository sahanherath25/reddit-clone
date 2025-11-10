"use server"

import {z} from "zod"
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import paths from "@/paths";

import prisma from "../../prisma";
import {revalidatePath} from "next/cache";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

// TODO Define a Schema

const createPostSchema = z.object({

    title: z.string().min(3).regex(/^[a-zA-Z]+$/,
        {message: "Name must only contains letters"}),
    content: z.string().nonempty("Description is required").min(10)
})

export async function createPost(receivedSlug,formState, formData) {

    console.log("RECEIVED SLUG ",receivedSlug)

    const session = await getServerSession(authOptions);

    const title = formData.get("title");
    const content = formData.get("content");

    console.log("FORM TITILE ",title)
    console.log("FORM CONTENT  ",content)

    const currentState = {title, content}

    let result = createPostSchema.safeParse({title: title, content: content})

    console.log("Result is ",result)

    if (!result.success) {
        console.log("FORM ERRORS",result)
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

    // TODO Find the Topic Id by Slug

    const foundTopic=await prisma.topic.findFirst({where:{slug:receivedSlug}})

    console.log("FOUNDED TOPIC SHANA IS ",foundTopic)

    if(!foundTopic){

        return {
            errors: {_form: ["Cannot find the Relevant Topic"]}
        }
    }

    let post;

    // TODO Trying to Save to the Database

    console.log()

    try {

        // throw new Error("Failed to Create Topic")

        post = await prisma.post.create({
            data: {
                content: result.data.content,
                title:result.data.title,
                topicId:foundTopic.id,
                userId: session.user.id,

            }
        })




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
    // revalidatePath("/")
    redirect(paths.postShow(receivedSlug,post.id))

    // redirect(paths.topicShow(topic.slug))

    // TODO IF there is no error
    return {
        errors: {}
    }


}


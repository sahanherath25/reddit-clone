import prisma  from "../../../prisma";

export const verifyUserExists = async (user) => {

    console.log("We have reced a request to CHekc user Existancce ",user)


    try {
        const userFound = await prisma.user.findFirst({where: {email: user.email}})

        console.log("User Already Exists",userFound)

        if (userFound) {

            console.log("No New User Created user Exists",userFound)

            return userFound;
        } else {
            //     User Not Found
            //     TODO Create a New User and Save in DB

            const newUser = await prisma.User.create({
                data: {email: user.email, name: user.name,}
            })
            console.log("NEW USDER CREATED ",newUser)
            return newUser
        }

    } catch (e) {
        console.log("Error ", e)
    }
}


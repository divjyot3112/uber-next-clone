import React from 'react'
import tw from 'tailwind-styled-components'

const Login = () => {
    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
            <Title>
                Log in to access your account
            </Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SigninButton>
                Sign in with Google
            </SigninButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`

const SigninButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`

const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`

const Title = tw.div`
text-5xl text-gray-500 pt-4
`

const HeadImage = tw.img`
object-contain w-full
`
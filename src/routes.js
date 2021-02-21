import React from "react"
import {
    CreatePostPage,
    LoginPage,
    MainPage,
    PostPage,
    SettingsPage,
    SignupPage,
    UserPage,
    NotFoundPage
} from "./pages"

export const routes = {
    // Main page
    "/f/:subfreddit": ({ subfreddit }) => <MainPage subfreddit={subfreddit} />,
    // Post view
    "/f/:subfreddit/:postId/": ({ subfreddit, postId }) => <PostPage subfreddit={subfreddit} postId={postId} />,
    // Create a post
    "/f/:subfreddit/post": ({ subfreddit }) => <CreatePostPage subfreddit={subfreddit} />,
    // User profile
    "/u/:userId": ({ userId }) => <UserPage userId={userId} />,
    // Account settings
    "/settings": () => <SettingsPage />,
    // Login
    "/login": () => <LoginPage />,
    // Sign up
    "/signup": () => <SignupPage />
}
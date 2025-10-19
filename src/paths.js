const paths={
    homePath(){
        return "/"
    },
    topicShow(slug){
        return `/topics/${slug}`
    },
    postCreate(slug){
        return `/topics/${slug}/post/new`
    },
    postShow(slug,postId){
        return `/topics/${slug}/posts/${postId}`
    }
}
export default paths;


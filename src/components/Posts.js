import Post from "./Post"

export default function Posts(){
  const posts = [
    {
        userName: "meowed",
        userImage: "assets/img/meowed.svg",
        contentImage: "assets/img/gato-telefone.svg",
        likedByImage: "assets/img/respondeai.svg",
        likedByText: "respondeai",
        initialLikesAmount: 101523
    },
    {
        userName: "barked",
        userImage: "assets/img/barked.svg",
        contentImage: "assets/img/dog.svg",
        likedByImage: "assets/img/adorable_animals.svg",
        likedByText: "adorable_animals",
        initialLikesAmount: 200541
    }
  ]
    return(
        <div class="posts">
            {posts.map((p) => 
            <Post
              userName={p.userName}
              userImage={p.userImage}
              contentImage={p.contentImage}
              likedByImage={p.likedByImage}
              likedByText={p.likedByText}
              initialLikesAmount={p.initialLikesAmount}
            />)}
        </div>
    )
}
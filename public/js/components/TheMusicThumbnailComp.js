export default{
    name: "TheMusicThumbnail",
    props: ['music'],
    template:`
        <div class="song-box">
            <img :src='"/images/music/" + music.thumbnail' alt="music thumb">
            <p>{{music.song_name}}</p>
            <p>-By {{music.singer}}</p>
        </div>
    `
}
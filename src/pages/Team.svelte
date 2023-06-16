<script>
    import Person from "../components/person.svelte";

    let people = [
        {
            name: "Ronit Nath",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae consequat quam. Suspendisse sed ipsum eget nisl consectetur consequat. Sed tincidunt feugiat est, at laoreet lorem venenatis non. Sed vel tristique mauris, non bibendum nunc. Nulla facilisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vitae interdum diam. Donec nec neque nec odio semper pharetra. Aliquam euismod aliquet sem vitae aliquam. Nunc vel ligula mi. Fusce consequat ex in libero feugiat, ut fermentum quam cursus. Proin vitae pulvinar velit. Suspendisse finibus, arcu non volutpat eleifend, risus turpis auctor ex, ac tincidunt arcu nisl in nunc.",
            img_src: "https://avatarfiles.alphacoders.com/291/291019.jpg"
        },
        {
            name: "Fengyi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae consequat quam. Suspendisse sed ipsum eget nisl consectetur consequat. Sed tincidunt feugiat est, at laoreet lorem venenatis non. Sed vel tristique mauris, non bibendum nunc. Nulla facilisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vitae interdum diam. Donec nec neque nec odio semper pharetra. Aliquam euismod aliquet sem vitae aliquam. Nunc vel ligula mi. Fusce consequat ex in libero feugiat, ut fermentum quam cursus. Proin vitae pulvinar velit. Suspendisse finibus, arcu non volutpat eleifend, risus turpis auctor ex, ac tincidunt arcu nisl in nunc.",
            img_src: "https://avatarfiles.alphacoders.com/291/291019.jpg"
        },
    ]
</script>

<div >
    <h1>Meet the team!</h1>
    <div>
        {#each people as person (person.name)}
            <Person name={person.name} desc={person.description} img_src={person.img_src}/>
        {/each}
    </div>
</div>
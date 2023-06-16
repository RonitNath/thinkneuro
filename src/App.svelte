<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Router, { link } from "svelte-spa-router";
    import { routes } from "./routes.js";
</script>



<main>
    <Header />
    <br />
    <hr>
    <br>
    <div class="content wrapper">
        <Router {routes}/>
    </div>
    <Footer />
</main>



<!-- 
<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main> -->

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 20% ;
        margin-bottom: 5vh;
        background-color: #ABCDFF;
        min-height: 95vh;
	}

    .content {
        padding: 0 10%;
    }

    




	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
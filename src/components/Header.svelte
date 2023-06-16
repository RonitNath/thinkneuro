<style>
    img {
        /* Absolute position of parent div, left side, scales dynamically based on device width */
        width: 50px;
    }

    h1 {
        font-size: 100%;
        font-weight: 600;
        margin: 0;
    }

    .logo-items {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .title {
        flex-basis: 50%;
    }

    .title-sides {
        flex-basis: 25%;
    }

    header {
        font-family: 'Montserrat', sans-serif;
    }
</style>

<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
</head>

<header>
    <div class="logo-items">
        <img class="title-sides" src="/logo.png" alt="ThinkNeuro Logo">
        <div class="title">
            <h1>ThinkNeuro</h1>
            <p>ThinkNeuro is a wonderful organization</p>
        </div>
        <div class="title-sides"></div>
    </div>
    <nav>

        <Navlink to="/" name="Home" />
        <Navlink to="/about" name="About" />
        <Navlink to="/team" name="Team" />
        <Navlink to="/outreach" name="Community Engagement" />
        <Navlink to="/contact" name="Contact" />
        <Navlink to="/resources" name="Resources" />
        <Navlink to="/faq" name="FAQ" />
        <Navlink to="/curriculum" name="Curriculum" />

        <!-- <a href="/" use:link >Home</a>
        <a href="/about" use:link >About</a>
        <a href="/team" use:link>Team</a>
        <a href="/outreach" use:link>Community Engagement</a>
        <a use:link href="/contact">Contact</a>
        <a use:link href="/resources">Resources</a>
        <a use:link href="/faq">FAQ</a>
        <a use:link href="/curriculum">Curriculum</a> -->

    </nav>
</header>

<script>
    import Navlink from "./navlink.svelte";
    import { link } from "svelte-spa-router";
</script>
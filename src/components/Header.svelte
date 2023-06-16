
<header>
    <img src="" alt="">
    <h1>ThinkNeuro</h1>
    <p>ThinkNeuro is a wonderful organization</p>
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
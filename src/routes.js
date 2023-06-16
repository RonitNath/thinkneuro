import Home from "./pages/Home.svelte"
import About from "./pages/About.svelte"
import NotFound from "./pages/NotFound.svelte"
import Resources from "./pages/Resources.svelte"
import Contact from "./pages/Contact.svelte"
import Curriculum from "./pages/Curriculum.svelte"
import Outreach from "./pages/Outreach.svelte"
import FAQ from "./pages/FAQ.svelte"
import Team from "./pages/Team.svelte"

export const routes = {
	"/": Home,
	"/about": About,
	"/team": Team,
	"/resources": Resources,
	"/contact": Contact,
	"/curriculum": Curriculum,
	"/outreach": Outreach,
	"/faq": FAQ,

	"*": NotFound,
}

<script>

    import QA from "../components/QA.svelte"

    let pairs = [
  { question: "What kind of volunteer work or activities will I be involved in?", answer: "A few topics we will cover this summer includes an overview of the nervous system encompassing a neuron model construction project along with understanding academic journals followed by crafting a research poster." },
  { question: "Where will this program take place? Is it virtual or in person?", answer: "Our health modules are virtual and asynchronous while the last week of our program will be in person volunteering in your local community. This can take place in local community centers, parks, neighborhoods, libraries, etc." },
  { question: "When will the program take place?", answer: "Our program runs from June 26th to August 1st." },
  { question: "What is the time commitment for this program?", answer: "There is a 3 hour time commitment per week." },
  { question: "Who can participate in this program?", answer: "We encourage students enrolled in a K-12 academic school as well as undergraduates to apply for our program here. Our learning modules are tailored to each age group, from Elementary and Middle School to High School and undergraduate levels." },
  { question: "I have a vacation planned during the program. Can I still participate?", answer: "Yes! We would love for everyone to have a chance to participate in our program which is why our program is virtual and asynchronous. This means you can hop online from anywhere, including your vacation spot. As for the in person volunteering week, we are also offering a makeup week for missed assignments from August 14-18th." },
  { question: "I have a question about this week’s assignments. What can I do?", answer: "We have weekly office hours where you can ask our team any questions. Check out our calendar here! You can also email us at thinkneuro.usa@gmail.com." },
  { question: "I’m interested in leadership positions with Think Neuro. What can I do?", answer: "We also offer research, leadership, and internship opportunities to high school and undergraduate students. Please stay tuned for more information about these opportunities." }
];

</script>


<div style="display: flex">
	<div>
		<h1>Frequently Asked Questions</h1>
		{#each pairs as pair (pair.question)}
			<QA q={pair.question} a={pair.answer}/>
		{/each}
	</div>
</div>
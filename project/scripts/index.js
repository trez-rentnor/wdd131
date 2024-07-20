const all_actors = [
    {
        name: "Brenda Kaplan",
        role: "Juliet",
        headshot: "images/female-1.webp",
        headshot_small: "images/female-1-small.webp"
    },
    {
        name: "Fabian Faulkner",
        role: "Romeo",
        headshot: "images/male-1.webp",
        headshot_small: "images/male-1-small.webp"
    },
    {
        name: "Meredith Mitchell",
        role: "Lady Montague",
        headshot: "images/female-2.webp",
        headshot_small: "images/female-2-small.webp"
    },
    {
        name: "Ibrahim Ibarra",
        role: "Montague",
        headshot: "images/male-2.webp",
        headshot_small: "images/male-2-small.webp"
    },
    {
        name: "Myah Mcgowan",
        role: "Lady Capulet",
        headshot: "images/female-3.webp",
        headshot_small: "images/female-3-small.webp"
    },
    {
        name: "Maisha Barker",
        role: "Nurse",
        headshot: "images/female-4.webp",
        headshot_small: "images/female-4-small.webp"
    },
    {
        name: "Jonah Hanna",
        role: "Mercutio",
        headshot: "images/male-3.webp",
        headshot_small: "images/male-3-small.webp"
    },
    {
        name: "Mahdi Greer",
        role: "Benvolio",
        headshot: "images/male-4.webp",
        headshot_small: "images/male-4-small.webp"
    },
    {
        name: "Natalia Vazquez",
        role: "Capulet",
        headshot: "images/female-5.webp",
        headshot_small: "images/female-5-small.webp"
    },
    {
        name: "Roman Roach",
        role: "Balthasar",
        headshot: "images/male-5.webp",
        headshot_small: "images/male-5-small.webp"
    },
    {
        name: "Ishaan Arche",
        role: "Abram",
        headshot: "images/male-6.webp",
        headshot_small: "images/male-6-small.webp"
    }
];

var scheduled_actors = [];

/**
 * Add an actor to the schedule
 * @param {*} actor
 */
function add_to_schedule(actor) {
    if (!scheduled_actors.some(a => a.name === actor.name)) {
        scheduled_actors.push(actor);
        populate_scheduled_actors(scheduled_actors);
    } else {
        console.log(`Actor already on schedule: ${actor}`)
    }
}

/**
 * Remove an actor from the schedule
 * @param {*} actor
 */
function remove_from_schedule(actor) {
    const index = scheduled_actors.indexOf(actor);

    if (index >= 0) {
        scheduled_actors.splice(index, 1);
        populate_scheduled_actors(scheduled_actors);
    } else {
        console.log(`Actor not scheduled: ${actor}`)
    }
}

/**
 * Populate the full cast list panel
 * @param {*} cast
 */
function populate_full_cast(cast) {
    const fullcast = document.getElementById("fullcast");

    for (const actor of cast) {
        const div = document.createElement("div");
        div.setAttribute("class", "actor-mini");
        div.onclick = () => add_to_schedule(actor);

        const img = document.createElement("img");
        img.setAttribute("src", actor.headshot_small);
        img.setAttribute("alt", `Head shot for ${actor.name}`);
        img.setAttribute("loading", "lazy");

        const name = document.createElement("span");
        name.setAttribute("class", "actor-name");
        name.innerText = `${actor.name} (${actor.role})`;

        const text = document.createElement("div");
        text.setAttribute("class", "actor-label");
        text.appendChild(name);

        div.appendChild(img);
        div.appendChild(text);
        fullcast.appendChild(div);
    }
}

/**
 * Populate the scheduled actors panel
 * @param {*} actors
 */
function populate_scheduled_actors(actors) {
    const actor_panel = document.getElementById("actors");
    actor_panel.innerHTML = "";

    for (const actor of actors) {
        const div = document.createElement("div");
        div.setAttribute("class", "actor-large");
        div.onclick = () => remove_from_schedule(actor);

        const img = document.createElement("img");
        img.setAttribute("src", actor.headshot);
        img.setAttribute("alt", `Head shot for ${actor.name}`);
        img.setAttribute("loading", "lazy");

        const name = document.createElement("p");
        name.setAttribute("class", "name");
        name.innerText = actor.name;

        const role = document.createElement("p");
        role.setAttribute("class", "role");
        role.innerText = actor.role;

        const label = document.createElement("div");
        label.setAttribute("class", "actor-label");
        label.appendChild(name);
        label.appendChild(role);

        div.appendChild(img);
        div.appendChild(label);

        actor_panel.appendChild(div);
    }
}

/**
 * Save form values to localStorage
 */
function save_form() {
    localStorage.setItem("date", document.getElementById("date").value);
    localStorage.setItem("start_time", document.getElementById("start-time").value);
    localStorage.setItem("end_time", document.getElementById("end-time").value);
    localStorage.setItem("scene", document.getElementById("scene").value);
    localStorage.setItem("scheduled_actors", JSON.stringify(scheduled_actors));
}

/**
 * Load form value from localStorage
 */
document.addEventListener('DOMContentLoaded', () => {
    const date = localStorage.getItem("date");
    if (date) {
        document.getElementById("date").value = date;
    }

    const start_time = localStorage.getItem("start_time");
    if (start_time) {
        document.getElementById("start-time").value = start_time;
    }

    const end_time = localStorage.getItem("end_time");
    if (end_time) {
        document.getElementById("end-time").value = end_time;
    }

    const scene = localStorage.getItem("scene");
    if (scene) {
        document.getElementById("scene").value = scene;
    }

    const scheduled_actors_str = localStorage.getItem("scheduled_actors");
    if (scheduled_actors_str) {
        scheduled_actors = JSON.parse(scheduled_actors_str)
        populate_scheduled_actors(scheduled_actors);
    }

    populate_full_cast(all_actors);
});
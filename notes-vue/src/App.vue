<script setup>
import { ref } from "vue";
import Card from "./components/Card.vue";
import { colors } from "./assets/colors.js";

const localStorageNotes = localStorage.getItem('notes')
const initialNotes = localStorageNotes ? JSON.parse(localStorageNotes) : []

const notes = ref(initialNotes)

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes.value))
}

function createNote() {
    notes.value.push({
        id: notes.value.length,
        title: "",
        content: "",
        color: colors[Math.floor(Math.random() * colors.length)],
        new: true,
        done: false,
    });
    saveNotes()
}

function removeNote(id) {
    notes.value = notes.value.filter((note) => note.id !== id);
    saveNotes()
}

function markAsDone(id) {
    const note = notes.value.find((note) => note.id === id);
    note.done = !note.done;
    saveNotes()
}

function changeColor(object) {
    const note = notes.value.find((note) => note.id === object.id);
    note.color = object.color;
    saveNotes()
}

function updateContent(object) {
    const note = notes.value.find((note) => note.id === object.id);
    note.content = object.content;
    saveNotes()
}

function updateHeader(object) {
    const note = notes.value.find((note) => note.id === object.id);
    note.title = object.header;
    saveNotes()
}
</script>

<template>
    <main>
        <h1>Notes</h1>
        <div class="cards">
            <Card
                @remove="removeNote"
                @changeColor="changeColor"
                @markAsDone="markAsDone"
                @updateContent="updateContent"
                @updateHeader="updateHeader"
                v-for="note in notes"
                :note="note"
                :key="note.id"
            ></Card>
            <div class="newCard" @click="createNote">
                <img src="./assets/plus.svg" alt="plus icon" />
            </div>
        </div>
    </main>
</template>

<style scoped>
h1 {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;
}
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
.newCard {
    background-color: #f8f8f8;
    border-radius: 0.5rem;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: none;
    transition: box-shadow 0.5s;
}

.newCard:hover {
    box-shadow: 0px 0px 30px 1px rgba(255, 255, 255, 0.4);
}
img {
    height: 100%;
    width: 100%;
    padding: 7rem 7rem;
    transition: transform 0.5s ease-in-out;
}
img:hover {
    animation: rotateAnimation 0.5s forwards;
}
@keyframes rotateAnimation {
    to {
        transform: rotate(180deg);
    }
}
</style>

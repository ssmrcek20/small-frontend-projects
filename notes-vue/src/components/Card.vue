<script setup>
import { ref, onMounted, computed } from "vue";
import { colors } from "../assets/colors.js";

const props = defineProps({
    note: Object,
});

const emits = defineEmits(["remove", "changeColor", "markAsDone", "updateContent", "updateHeader"]);

const headerRef = ref(null);
const textStyle = computed(() => ({
    textDecoration: props.note.done ? "line-through" : "none",
}));

function preventEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
}

function changeColor(color) {
    emits("changeColor", { id: props.note.id, color: color });
}

function removeNote() {
    emits("remove", props.note.id);
}

function markAsDone() {
    emits("markAsDone", props.note.id);
}

function handleContentChange(event) {
    const updatedContent = event.target.value;
    emits("updateContent", { id: props.note.id, content: updatedContent });
}

function handleHeaderChange(event) {
    const updatedHeader = event.target.value;
    emits("updateHeader", { id: props.note.id, header: updatedHeader });
}

onMounted(() => {
    if (props.note.new) headerRef.value.focus();
});
</script>

<template>
    <div class="card" :style="{ backgroundColor: note.color }">
        <textarea
            :style="textStyle"
            ref="headerRef"
            class="cardHeading"
            maxlength="20"
            @keydown="preventEnter"
            @input="handleHeaderChange"
            >{{ note.title }}</textarea
        >
        <textarea @input="handleContentChange" :style="textStyle" class="cardBody">{{
            note.content
        }}</textarea>
        <div class="cardButtons">
            <button class="colorB" :style="{ backgroundColor: note.color }">
                Color
                <div class="colors">
                    <div
                        class="color"
                        v-for="color in colors"
                        :key="color"
                        :style="{ backgroundColor: color }"
                        @click="changeColor(color)"
                    ></div>
                </div>
            </button>
            <button class="removeB" @click="removeNote">Remove</button>
            <button class="doneB" @click="markAsDone">
                {{ note.done ? "Undo" : "Done" }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #f8f8f8;
    color: #2c3e50;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 300px;
    height: 300px;
    position: relative;
    transition: background-color 0.3s ease-in-out;
}
textarea {
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    width: 100%;
}
.cardHeading {
    font-size: 1.5rem;
    font-weight: bold;
    height: 2rem;
}
.cardBody {
    font-size: 1rem;
    height: calc(100% - 3.4rem);
    color: #2c3e50;
}
.cardButtons {
    position: absolute;
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 100%
    );
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.3s;
}
.card:hover .cardButtons {
    opacity: 1;
}
button {
    background-color: rgb(90, 209, 170);
    border: none;
    font-weight: bold;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.doneB:hover {
    background-color: rgb(50, 179, 136);
}
.removeB {
    background-color: #ff7878;
}
.removeB:hover {
    background-color: #ff4d4d;
}
.colorB {
    cursor: default;
    position: relative;
}
.colors {
    opacity: 0;
    transition: opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    position: absolute;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    z-index: 10;
    top: 110%;
    left: 0;
    width: 5rem;
    background-color: #f8f8f8;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 0.5rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0);
}
.colorB:hover .colors {
    opacity: 1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.color {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #808080;
}
</style>

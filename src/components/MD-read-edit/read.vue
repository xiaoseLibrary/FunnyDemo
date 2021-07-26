<template>
    <div>
        <div v-html="html" class="markdown-body"></div>
    </div>
</template>

<script>
import README from "@/assets/README.md";
export default {
    name: "read",
    data() {
        return {
            html: README
        };
    }
};
</script>

<style scoped></style>

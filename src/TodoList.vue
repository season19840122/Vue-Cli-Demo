<template>
    <div>
        <input type="text" name="" id="" v-model="txt">
        <button @click="handleAdd">添加</button>
        <ul>
            <todo-item
                v-for = "(item, index) of list"
                :key = "index"
                :index = "index"
                :content = "item"
                @delete = 'handleDelete'
            ></todo-item>
        </ul>
    </div>
</template>

<script>
import TodoItem from './components/TodoItem';

export default {
    components: {
        'todo-item': TodoItem
    },
    data() {
        return {
            txt: '',
            list: []
        }
    },
    methods: {
        handleAdd() {
            this.list.push(this.txt);
            this.txt = '';
        },
        handleDelete(index) {
            // console.log(index);
            this.list.splice(this.index, 1);
        }
    }
}
</script>

<style lang="scss">
    // $c: #f00;
    // div {
    //     background: $c;
    // }
</style>

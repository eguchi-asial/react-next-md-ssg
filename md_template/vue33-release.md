---
title: 'Vue3.3 ruouni kenshin release'
excerpt: 'Vue3.3の新機能簡単に紹介'
coverImage: ''
date: '2023-05-26T18:10:00.000Z'
author: 江口
---

# Vue3.3 ruouni kenshin release

## Vue3.3

**全体的にsetup構文のts強化がメイン**

### defineEmitsの型指定が直感的に書けるようになった(糖衣構文)

- before

```.vue
const emit = defineEmits<{
  (e: 'foo', id: number): void
  (e: 'bar', name: string, ...rest: any[]): void
}>()
```

- after

```.vue
const emit = defineEmits<{
  foo: [id: number]
  bar: [name: string, ...rest: any[]]
}>()
```

より直感的に宣言できるようになった。

▼実際に使うとこんな感じ

```
ex1) @click=\"$emit('foo', 123)\"
ex2) @click=\"$emit('bar', 'aaa', [1, 'aaa', true])\"
```

ちなみに...rest: any[]はtuple型
ex) `const list: [number, string, boolean] = [1, 'aaa', true];`

### slotにtype指定ができるようになった - defineSlots

まずslotとは...

https://ja.vuejs.org/guide/components/slots.html#named-slots

こんなカスタムコンポーネントがあったとして、

```  CustomComponent.vue
<template>
	<div class=\"container\">
	  <header>
	    <slot name=\"header\"></slot>
	  </header>
	  <main>
	    <slot></slot>
	  </main>
	  <footer>
	    <slot name=\"footer\"></slot>
	  </footer>
	</div>
</template>
```

使う側で上記の `name=\"header\"` や `name=\"footer\"` に自由にtemplateを差し込める

``` Use-CustomComponent
<template>
	<CustomComponent>
	  <template v-slot:header>
	    <div>へっだーです。</div>
	  </template>
	  <template v-slot:footer>
	    <div>へっだーです。</div>
	  </template>
	</CustomComponent>
</template>
```

※余談ですが、v2.6から `slot` と `slot-scope` は廃止。v3もv-slotを使う

このslotにtypeを宣言できるようになった

``` defineSlot
<script setup lang=\"ts\">
defineSlots<{
  default?: () => any
  header?: (props: { title: string }) => any
  footer?: (props: { id: number }) => any
}>()
</script>
```

``` CustomComponent
<template>
	<div class=\"container\">
	  <header>
	    <slot name=\"header\" :title=\"へっだ\"></slot>
	  </header>
	  <main>
	    <slot></slot>
	  </main>
	  <footer>
	    <slot name=\"footer\" :id=\"123\"></slot>
	  </footer>
	</div>
</template>
```

``` UseCustomComponent
<template>
	<CustomComponent>
	  <template v-slot:header>
	    <div>{{ header.title }}</div>
	  </template>
	  <template #default>
	    <p>コンテンツ。v-slotは # で省略してもかける</p>
	  </template>
	  <template v-slot:footer>
	    <div>{{ footer.id }}</div>
	  </template>
	</CustomComponent>
</template>
```

`v-slot:header` は `#header` とも書ける

こんな感じでslotのnameとpropertyを宣言できるようになった

### <実験的> 分割代入時のリアクティブの維持

``` removed-reactivity-byVue3-2
const { msg } = defineProps(['msg'])
```

msgのリアクティブは喪失するというのが3.2までの挙動。
**toRefs(props)でpropsから分割代入すれば、リアクティブ消失せずに済む。**


```
const props = defineProps(['msg'])
const { msg } = toRefs(props)
```



しかし、3.3からは消えなくなった & デフォルト値も宣言できて、より人間工学的に書けるようになった(原文が人間工学と書いているけど、直感的に書けるようになったという理解かな)

``` Reactivity-is-not-lost-byVue3-3
const { msg = 'hello' } = defineProps(['msg'])
```

### <実験的> defineModelの導入

`v-model` がより直感的に書けるようになった

そもそもv-modelについて

https://ja.vuejs.org/guide/components/v-model.html#v-model-arguments

従来は以下のように、propsで宣言したmovelValueをemitで使う側に変更を通知し、使う側がpropsのmodelValueを更新していた。

```
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const onInput = (e: globalThis.Event) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <input :value=\"modelValue\" @input=\"onInput\" />
</template>
```

あるいは、以下のようにv-modelを使って、set時にemitする。やってることは同じ。

``` computed-example-v-model
<!-- CustomInput.vue -->
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<template>
  <input v-model=\"value\" />
</template>
```

ちょっと冗長で面倒だった。

これが3.3からはこう書ける

``` CustomModelComponent
<script setup>
const modelValue = defineModel()
</script>

<template>
  <input v-model=\"modelValue\" />
</template>
```

使う側はこう

``` use-CustomModelComponent
<script setup>
import { ref } from 'vue'
import CustomModelComponent from './CustomModelComponent.vue'
const msg = ref('')
</script>
<template>
  <CustomModelComponent v-model=\"msg\" />
</template>
```

> 自動的に prop を登録し、直接変更できる ref を返します。

すごいけど、この特徴慣れ親しまないとどこで何やってんの？になるかも。
RFCは[こちら](https://github.com/vuejs/rfcs/discussions/503)



とりあえず、一旦こんな感じ。

分割代入のリアクティブ喪失回避は嬉しいので早くほしい。

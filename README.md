# vue-mixin-ts-demo

A minimal demo app to demonstrate a TypeScript issue with [vue-class-component](https://github.com/vuejs/vue-class-component) and Mixins. This is okay with vue-class-component v7.2.3, but unhappy with v7.2.5.

Using a typed declaration like:

```
@Component
export default class HelloWorld extends Mixins<AnimalMixin<Cat>>(
  AnimalMixin,
  UtilsMixin
) {
  ...
}
```

...results in the following TypeScript error:

```
ERROR in vue-mixin-ts-demo/src/components/HelloWorld.vue(40,48):
40:48 Type 'AnimalMixin<Cat>' does not satisfy the constraint 'VueClass<Vue>[]'.
  Type 'AnimalMixin<Cat>' is missing the following properties from type 'VueClass<Vue>[]': length, pop, push, concat, and 28 more.
    38 |
    39 | @Component
  > 40 | export default class HelloWorld extends Mixins<AnimalMixin<Cat>>(
       |                                                ^
    41 |   AnimalMixin,
    42 |   UtilsMixin
    43 | ) {
Version: typescript 4.0.2
```

If you're not including multiple Mixins, it's okay:

```
@Component
export default class HelloWorld extends Mixins<AnimalMixin<Cat>>(
  AnimalMixin
) {
  ...
}
```

If you're not using a typed Mixin declaration, it's okay:

```
@Component
export default class HelloWorld extends Mixins(
  SomeOtherMixin,
  UtilsMixin
) {
  ...
}
```

It's the combination of the two that appears to have a missing type definition.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

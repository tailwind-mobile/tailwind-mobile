<template>
  <k-page>
    <k-navbar title="Form Inputs">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Default</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input label="Name" type="text" placeholder="Your name">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>
      <k-list-input
        label="Password"
        type="password"
        placeholder="Your password"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input label="E-mail" type="email" placeholder="Your e-mail">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input label="URL" type="url" placeholder="URL">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input label="Phone" type="tel" placeholder="Your phone number">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        label="Gender"
        type="select"
        dropdown
        default-value="Male"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </k-list-input>

      <k-list-input
        label="Birthday"
        type="date"
        default-value="2014-04-30"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        label="Date time"
        type="datetime-local"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        label="Textarea"
        type="textarea"
        placeholder="Bio"
        input-class="!h-20 resize-none"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>
    </k-list>

    <k-block-title>Outline</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input outline label="Name" type="text" placeholder="Your name">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="Password"
        type="password"
        placeholder="Your password"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="E-mail"
        type="email"
        placeholder="Your e-mail"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input outline label="URL" type="url" placeholder="URL">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="Phone"
        type="tel"
        placeholder="Your phone number"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="Gender"
        type="select"
        dropdown
        default-value="Male"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </k-list-input>

      <k-list-input
        outline
        label="Birthday"
        type="date"
        default-value="2014-04-30"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="Date time"
        type="datetime-local"
        placeholder="Please choose..."
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="Textarea"
        type="textarea"
        placeholder="Bio"
        input-class="!h-20 resize-none"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>
    </k-list>

    <k-block-title>Floating Labels</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input
        label="Name"
        floating-label
        type="text"
        placeholder="Your name"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        label="E-mail"
        floating-label
        type="email"
        placeholder="Your e-mail"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input label="URL" floating-label type="url" placeholder="URL">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        label="Phone"
        floating-label
        type="tel"
        placeholder="Your phone number"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>
    </k-list>

    <k-block-title>Outline + Floating Labels</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input
        outline
        label="Name"
        floating-label
        type="text"
        placeholder="Your name"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="E-mail"
        floating-label
        type="email"
        placeholder="Your e-mail"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="URL"
        floating-label
        type="url"
        placeholder="URL"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input
        outline
        label="Phone"
        floating-label
        type="tel"
        placeholder="Your phone number"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>
    </k-list>

    <k-block-title>Validation + Additional Info</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        info="Basic string checking"
        :value="name.value"
        :error="
          name.changed && !name.value.trim() ? 'Please specify your name' : ''
        "
        @input="onNameChange"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>
    </k-list>

    <k-block-title>Clear Button</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input
        v-model="demoValue"
        label="TV Show"
        type="text"
        placeholder="Your favorite TV show"
        info="Type something to see clear button"
        :clear-button="demoValue.length > 0"
        @clear="onDemoValueClear"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>
    </k-list>
    <p>Favorite TV Show: {{demoValue}}</p>

    <k-block-title>Icon + Input</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input type="text" placeholder="Your name">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input type="password" placeholder="Your password">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input type="email" placeholder="Your e-mail">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>

      <k-list-input type="url" placeholder="URL">
        <template #media>
          <demo-icon />
        </template>
      </k-list-input>
    </k-list>

    <k-block-title>Label + Input</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input label="Name" type="text" placeholder="Your name" />

      <k-list-input
        label="Password"
        type="password"
        placeholder="Your password"
      />

      <k-list-input label="E-mail" type="email" placeholder="Your e-mail" />

      <k-list-input label="URL" type="url" placeholder="URL" />
    </k-list>

    <k-block-title>Only Inputs</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input type="text" placeholder="Your name" />

      <k-list-input type="password" placeholder="Your password" />

      <k-list-input type="email" placeholder="Your e-mail" />

      <k-list-input type="url" placeholder="URL" />
    </k-list>

    <k-block-title>Inputs + Additional Info</k-block-title>
    <k-list inset-ios strong-ios>
      <k-list-input
        type="text"
        placeholder="Your name"
        info="Full name please"
      />

      <k-list-input
        type="password"
        placeholder="Your password"
        info="8 characters minimum"
      />

      <k-list-input
        type="email"
        placeholder="Your e-mail"
        info="Your work e-mail address"
      />

      <k-list-input type="url" placeholder="URL" info="Your website URL" />
    </k-list>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlockTitle,
    kList,
    kListInput,
  } from 'konsta/vue';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'FormInputsPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlockTitle,
      kList,
      kListInput,
      DemoIcon,
    },
    setup() {
      const name = ref({ value: '', changed: false });
      const demoValue = ref('test');

      const onNameChange = (e) => {
        name.value = { value: e.target.value, changed: true };
      };
      const onDemoValueChange = (e) => {
        demoValue.value = e.target.value;
      };
      const onDemoValueClear = () => {
        demoValue.value = '';
      };

      return {
        name,
        demoValue,
        onNameChange,
        onDemoValueChange,
        onDemoValueClear,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>

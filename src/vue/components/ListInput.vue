<template>
  <k-list-item
    :component="component"
    :class="c.base"
    :title="null"
    :media-class="c.media"
    :inner-class="c.inner[labelStyle]"
    :content-class="c.itemContent"
    :title-wrap-class="c.titleWrap"
    :dividers="theme === 'material' || isOutline ? false : undefined"
  >
    <template v-if="isOutline || theme === 'material'" #content>
      <span :class="c.border" />
    </template>
    <template v-if="slots.media" #media>
      <slot name="media" />
    </template>
    <template #inner>
      <div v-if="label" :class="c.label[labelStyle]">
        <div :class="c.labelText">{{ label }}<slot name="label" /></div>
      </div>
      <div :class="c.inputWrap[labelStyle]">
        <component
          :is="InputComponent"
          v-if="!slots.input"
          :id="inputId"
          ref="inputElRef"
          :class="c.input[labelStyleIsFloating]"
          :style="inputStyle"
          :name="name"
          :placeholder="placeholder"
          :inputmode="inputmode"
          :accept="accept"
          :autocomplete="autocomplete"
          :autocorrect="autocorrect"
          :autocapitalize="autocapitalize"
          :spellcheck="spellcheck"
          :autofocus="autofocus"
          :autosave="autosave"
          :disabled="disabled"
          :max="max"
          :maxlength="maxlength"
          :min="min"
          :minlength="minlength"
          :step="step"
          :multiple="multiple"
          :readonly="readonly"
          :required="required"
          :pattern="pattern"
          :tabindex="tabindex"
          v-bind="inputProps"
          :value="modelValue"
          @input="onInput"
          @change="onChange"
          @focus="onFocusInternal"
          @blur="onBlurInternal"
        >
          <slot v-if="type === 'select'" />
        </component>
        <slot v-if="slots.input" name="input" />
        <DeleteIcon
          v-if="clearButton"
          :theme="theme"
          :class="c.clearButton"
          @click="onClear"
        />
        <DropdownIcon v-if="dropdown" :class="c.dropdown" />
      </div>
      <!-- error info content -->
      <div
        v-if="(error && error !== true) || slots.error"
        :class="cls(c.errorInfo, c.error)"
      >
        {{ error }}<slot name="error" />
      </div>
      <div
        v-if="(info && !error) || slots.info"
        :class="cls(c.errorInfo, c.info)"
      >
        {{ info }}<slot name="info" />
      </div>
    </template>
    <slot v-if="type !== 'select'" />
  </k-list-item>
</template>
<script>
  import { computed, ref } from 'vue';
  import { useContext } from '../shared/use-context.js';

  import { cls } from '../../shared/cls.js';

  import { useTheme } from '../shared/use-theme.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  import DeleteIcon from './icons/DeleteIcon.vue';
  import DropdownIcon from './icons/DropdownIcon.vue';
  import kListItem from './ListItem.vue';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import { ListInputClasses } from '../../shared/classes/ListInputClasses.js';

  import { ListInputColors } from '../../shared/colors/ListInputColors.js';

  export default {
    name: 'k-list-input',
    components: {
      DeleteIcon,
      DropdownIcon,
      kListItem,
    },
    props: {
      component: {
        type: String,
        default: 'li',
      },
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      outline: {
        type: Boolean,
        default: undefined,
      },
      outlineIos: {
        type: Boolean,
        default: undefined,
      },
      outlineMaterial: {
        type: Boolean,
        default: undefined,
      },
      label: String,
      floatingLabel: Boolean,
      info: String, // string
      error: String, // string or bool
      clearButton: Boolean,
      dropdown: Boolean,

      // input props
      inputId: String,
      inputStyle: [String, Object],
      inputClass: { type: String, default: '' },

      name: String,
      modelValue: [String, Number],
      type: { type: String, default: 'text' },
      inputmode: String,
      readonly: Boolean,
      required: Boolean,
      disabled: Boolean,
      placeholder: String,
      size: { type: [String, Number], default: undefined },
      accept: [String, Number],
      autocomplete: [String],
      autocorrect: [String],
      autocapitalize: [String],
      spellcheck: [String],
      autofocus: Boolean,
      autosave: String,
      max: [String, Number],
      min: [String, Number],
      step: [String, Number],
      maxlength: [String, Number],
      minlength: [String, Number],
      multiple: Boolean,
      pattern: String,
      tabindex: [String, Number],
    },
    emits: ['update:modelValue', 'change', 'input', 'focus', 'blur', 'clear'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const inputElRef = ref(null);
      const isFocused = ref(false);
      const theme = useTheme(props, context);
      const isOutline = computed(() =>
        typeof props.outline === 'undefined'
          ? theme.value === 'ios'
            ? props.outlineIos
            : props.outlineMaterial
          : props.outline
      );

      const labelStyle = computed(() =>
        props.label && props.floatingLabel ? 'floating' : 'stacked'
      );

      const labelStyleIsFloating = computed(() =>
        labelStyle.value === 'floating' ? 'floating' : 'notFloating'
      );

      const colors = computed(() =>
        ListInputColors(props.colors || {}, useDarkClasses)
      );

      const getDomValue = () => {
        if (!inputElRef.value) return undefined;
        return inputElRef.value.value;
      };

      const isInputHasValue = () => {
        const domValue = getDomValue();
        return typeof props.modelValue === 'undefined'
          ? domValue || domValue === 0
          : props.modelValue || props.modelValue === 0;
      };
      const isFloatingTransformed = computed(() => {
        return (
          props.label &&
          props.floatingLabel &&
          !isInputHasValue() &&
          !isFocused.value
        );
      });

      const getLabelColor = () => {
        if (props.error) return colors.value.errorText;
        if (theme === 'material') {
          return isFocused.value
            ? colors.value.labelTextFocusMaterial
            : colors.value.labelTextMaterial;
        }
        if (theme === 'ios') {
          return isFocused.value
            ? colors.value.labelTextFocusIos
            : colors.value.labelTextIos;
        }

        return '';
      };

      const onChange = (e) => {
        ctx.emit('change', e);
      };

      const onInput = (e) => {
        ctx.emit('input', e);
        ctx.emit('update:modelValue', e.target.value);
      };

      const onClear = (e) => {
        ctx.emit('clear', e);
      };

      const onFocusInternal = (e) => {
        isFocused.value = true;
        ctx.emit('focus', e);
      };
      const onBlurInternal = (e) => {
        isFocused.value = false;
        ctx.emit('blur', e);
      };

      const c = useThemeClasses(props, () =>
        ListInputClasses({ ...props }, colors.value, {
          isFloatingTransformed: isFloatingTransformed.value,
          isFocused: isFocused.value,
          darkClasses: useDarkClasses,
          getLabelColor,
          outline: isOutline,
          hasLabel: props.label || ctx.slots.label,
        })
      );

      const InputComponent = computed(() =>
        props.type === 'select' || props.type === 'textarea'
          ? props.type
          : 'input'
      );
      const needsType = computed(() => InputComponent.value === 'input');

      const inputProps = computed(() => {
        return {
          ...(typeof props.size === 'undefined' ? {} : { size: props.size }),
          ...(needsType.value ? { type: props.type } : {}),
        };
      });

      return {
        inputElRef,
        onChange,
        onInput,
        onFocusInternal,
        onBlurInternal,
        onClear,
        c,
        InputComponent,
        needsType,
        cls,
        labelStyle,
        labelStyleIsFloating,
        slots: ctx.slots,
        inputProps,
        theme,
        isOutline,
      };
    },
  };
</script>

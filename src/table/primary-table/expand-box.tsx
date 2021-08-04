import { defineComponent } from 'vue';
import TIconChevronUp from '../../icon/chevron-up-circle';
import TIconChevronDown from '../../icon/chevron-down-circle';
import { prefix } from '../../config';

export default defineComponent({
  name: `${prefix}-expand-box`,
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    return <span {...this.$attrs} class={`${prefix}-table-expand-box`}>
              {!this.expanded ? <TIconChevronUp /> : <TIconChevronDown />}
          </span>;
  },
});
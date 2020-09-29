import { defineComponent,watch } from '@vue/composition-api';
import './index.scss';

interface stepsProps {
  vertical: {
    type: Boolean,
  },
  active: {
    type: Number,
  }
}

export default defineComponent({
  name: 'NSteps',
  setup(props:stepsProps, {slots}) {
    watch(() => props.active, async (active) => {
      console.log(active)
    })
    return () => (
      <div class={['n-steps',props.vertical ? 'vertical': 'horizontal']}>
        {slots.default && slots.default()}
      </div>
    )
  }
})
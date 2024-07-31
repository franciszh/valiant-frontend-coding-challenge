import { createApp, defineAsyncComponent } from 'vue'
import '@/style.css'
import App from '@/App.vue'

const app = createApp(App)
// register the dynamic components globally
app
  .component('LoanAmount', defineAsyncComponent(() => import('./components/LoanAmount.vue')))
  .component('LoanPurpose', defineAsyncComponent(() => import('./components/LoanPurpose.vue')))
  .component('RepaymentPeriod', defineAsyncComponent(() => import('./components/RepaymentPeriod.vue')))
  .component('LoanTerm', defineAsyncComponent(() => import('./components/LoanTerm.vue')))
  .component('LoanResult', defineAsyncComponent(() => import('./components/LoanResult.vue')))

app.mount('#app')

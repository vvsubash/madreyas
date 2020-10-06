import User from '../pages/user'

export default { title: 'User' }

export const asAComponent = () => ({
  components: { User },
  template: '<User></User>',
})

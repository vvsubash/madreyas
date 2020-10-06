import ViewAnimalCard from '../components/view-animal-card'

export default { title: 'ViewCowCard' }

export const asAComponent = () => ({
  components: { ViewAnimalCard },
  template: '<ViewAnimalCard></ViewAnimalCard>',
})

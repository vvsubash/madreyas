import AnimalDisplayCard from '../components/animal-display-card'

export default { title: 'AnimalDisplayCard' }

export const asAComponent = () => ({
  components: { AnimalDisplayCard },
  template: '<AnimalDisplayCard></AnimalDisplayCard>',
})

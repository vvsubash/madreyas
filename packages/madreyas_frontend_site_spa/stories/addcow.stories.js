import addAnimal from '../pages/addanimal'

export default { title: 'addAnimal' }

export const asAComponent = () => ({
  components: { addAnimal },
  template: '<AddAnimal></AddAnimal>',
})

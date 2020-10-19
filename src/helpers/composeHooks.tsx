export default (...layers: Array<Function>) => (BaseComponent: Function) => {
    return (props: object) => {
      const hooksProps = layers.reduce((prevProps: object, layer: Function) => {
        const layerProps = layer.call(null, { ...props, ...prevProps })
        return {
          ...prevProps,
          ...layerProps,
        }
      }, {})
      return <BaseComponent {...props} {...hooksProps} />
    }
  }

/*
This helper allows u to compose your hooks, passing to the next layer your old props and the new ones!
It should always be a function that returns a object. Example:

> component/hooks/index.tsx

import composeHooks from '@helpers/composeHooks'

export default composeHooks(
  () => {
    return {
      newProp: 'hi, i'm a new prop'
    }
  },
  ({ newProp }) => {
    console.log(newProp, 'I got this prop from the previous hook')
    return {}
  }
)


> component/index.tsx

import enhancer from './hooks'

const myComponent = () => <>hi all</>

export default enhancer(myComponent)
*/
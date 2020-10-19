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
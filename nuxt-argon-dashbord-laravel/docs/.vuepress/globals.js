import Vue from 'vue'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
import LineChart from '@/components/argon-core/Charts/LineChart'
import BarChart from '@/components/argon-core/Charts/BarChart'
import PieChart from '@/components/argon-core/Charts/PieChart'
import DoughnutChart from '@/components/argon-core/Charts/DoughnutChart'
import WorldMap from '@/components/argon-core/WorldMap/WorldMap'

// https://webpack.js.org/guides/dependency-management/#require-context
export default function getComponents() {
  let components = {}
  let baseComponents = loadComponents()
  let otherComponents = {
    LineChart,
    BarChart,
    PieChart,
    DoughnutChart,
    WorldMap,
  }

  components = {
    ...baseComponents,
    ...otherComponents
  }

  return components
}

function loadComponentFolder(requireComponent, components) {
  requireComponent.keys().forEach((fileName) => {
    // Get the component config
    let componentConfig = requireComponent(fileName)
    componentConfig = componentConfig.default || componentConfig
    const componentName = upperFirst(
      camelCase(
        fileName
        // Remove the "./_" from the beginning
          .replace(/^\.\/_/, '')
          // Remove the file extension from the end
          .replace(/\.\w+$/, '')
      )
    )

    components[componentName] = componentConfig
    Vue.component(componentName, componentConfig)
  })
}

function loadComponents() {
  let components = {}
  const componentsFolderContext = require.context('../../components/argon-core', true)

  loadComponentFolder(componentsFolderContext, components);
  return components
}

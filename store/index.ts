import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree
} from "typed-vuex"

import weaponColorPatterns, { ColorPatterns } from "~/weaponColorPatterns"
import melodies from "~/melodies"

type Melody = {
  name: string
  pattern: string
}

export const state = () => ({
  weaponColorPatterns,
  usePattern: null as ColorPatterns | null,
  availableMelodies: [] as Melody[]
})

export const getters = getterTree(state, {
  getWeaponColorPatterns: (state) => state.weaponColorPatterns,
  getUsePattern: (state) => state.usePattern,
  getAvailableMelodies: (state) => state.availableMelodies
})

export const mutations = mutationTree(state, {
  setUsePattern(state, pattern: ColorPatterns) {
    state.usePattern = pattern
  },
  setAvailableMelodies(state, melodies: Melody[]) {
    state.availableMelodies = melodies
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    setUsePatternAction(_, pattern: ColorPatterns): void {
      this.app.$accessor.setUsePattern(pattern)
      const getAvailableMelodies = (
        pattern: null | ColorPatterns
      ): Melody[] => {
        if (!pattern) {
          return []
        }

        const allColors = ["白", "紫", "赤", "黄", "青", "緑", "橙", "空"]
        const colors = allColors.filter((s) => !pattern.includes(s))
        const regStr = `^(?!.*(${colors.join("|")})).*$`
        const reg = new RegExp(regStr)

        return Object.entries(melodies)
          .map((value) => {
            const filterResult = value[1]
              .map((s) => {
                const regResult = s.match(reg)
                if (regResult) {
                  return regResult[0]
                } else {
                  return null
                }
              })
              .filter(Boolean)

            if (filterResult.length) {
              return {
                name: value[0],
                pattern: filterResult![0]
              } as Melody
            } else {
              return null
            }
          })
          .filter(Boolean) as Melody[]
      }
      this.app.$accessor.setAvailableMelodies(
        getAvailableMelodies(pattern) ?? []
      )
    }
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions
})

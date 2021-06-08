import { ref, onMounted, onUnmounted, Ref } from 'vue'

const useClickOutside = (elemnetRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const handle = (e: MouseEvent) => {
    if (elemnetRef.value) {
      if (elemnetRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handle)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handle)
  })
  return isClickOutside
}

export default useClickOutside

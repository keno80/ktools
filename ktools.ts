/**
 * 是否是数组
 * @param value
 */

export const isArray = (value: any) => {
  return Array.isArray(value)
}

/**
 * 数组去重
 * @param array
 */

export const uniqueArray = (array: (string | number)[]) => {
  return [...new Set(array)]
}

/**
 * 检查对象是否为空
 * @param object
 */

export const isEmptyObject = (object: any) => {
  return Reflect.ownKeys(object).length === 0 && object.constructor === Object
}

/**
 * 复制
 * @param text
 */

export const copy = async (text: string) => {
  await navigator.clipboard.writeText(text)
}

/**
 * 两日期之间相差的天数
 * @param day1
 * @param day2
 */

export const betweenTowDay = (day1: { getTime: () => number }, day2: { getTime: () => number }) => {
  return Math.ceil(Math.abs(day1.getTime() - day2.getTime()) / 86400000);
}
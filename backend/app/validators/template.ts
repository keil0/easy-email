import vine from '@vinejs/vine'

export const templateValidator = vine.compile(
  vine.object({
    subject: vine.string().trim(),
    subTitle: vine.string().trim(),
    content: vine.string().trim(),
  })
)

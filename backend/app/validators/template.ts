import vine from '@vinejs/vine'

export const templateValidator = vine.compile(
  vine.object({
    previewUrl: vine.string().trim(),
    subject: vine.string().trim(),
    subTitle: vine.string().trim(),
    content: vine.string().trim(),
  })
)

import vine from '@vinejs/vine'

export const createMagicValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
  })
)

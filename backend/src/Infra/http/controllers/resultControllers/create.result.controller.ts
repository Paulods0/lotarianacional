import { z } from "zod"
import { Request, Response } from "express"
import { CreateResultUseCase } from "../../../../application/useCases/result/create.result.useCase"
import { ResultLimitException } from "../../../../domain/exceptions/resultLimitExceeded.exception"

export class CreateResultController {
  constructor(private createResultUseCase: CreateResultUseCase) {}

  async handle(req: Request, res: Response) {
    const createResultSchema = z.object({
      name: z.string(),
      hour: z.string(),
      number_1: z.number(),
      number_2: z.number(),
      number_3: z.number(),
      number_4: z.number(),
      number_5: z.number(),
    })
    try {
      const resultData = createResultSchema.parse(req.body)

      await this.createResultUseCase.execute(resultData)
      return res.status(201).json({ message: "Criado com sucesso." })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message })
      }
      if (error instanceof ResultLimitException) {
        return res.status(400).json({ message: error.message })
      }
      return res.status(500).json({ message: "Erro interno do servidor..." })
    }
  }
}

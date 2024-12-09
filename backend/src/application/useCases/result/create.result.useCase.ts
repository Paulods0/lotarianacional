import { Result } from "../../../domain/entities/result/result"
import { DailyResult } from "../../../domain/entities/dailyResults/dailyResult"
import { ResultLimitException } from "../../../domain/exceptions/resultLimitExceeded.exception"
import { IDailyResultRespository } from "../../../domain/entities/dailyResults/dailyResult.repository"

export type CreateResultInputDTO = {
  name: string
  hour: string
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
}

export class CreateResultUseCase {
  constructor(private dailyResultRespository: IDailyResultRespository) {}

  async execute(data: CreateResultInputDTO) {
    const today = new Date().toISOString().split("T")[0]

    let dailyResult: DailyResult | null =
      await this.dailyResultRespository.getByDate(today)

    if (!dailyResult) {
      dailyResult = {
        date: today,
        results: [],
      }
    }

    if (dailyResult.results.length >= 4) {
      throw new ResultLimitException()
    }

    const newResult: Result = Result.create({
      name: data.name,
      hour: data.hour,
      number_1: data.number_1,
      number_2: data.number_2,
      number_3: data.number_3,
      number_4: data.number_4,
      number_5: data.number_5,
    })

    dailyResult.results.push(newResult)

    if (dailyResult.id) {
      await this.dailyResultRespository.update(dailyResult)
    } else {
      await this.dailyResultRespository.save(dailyResult)
    }
  }
}

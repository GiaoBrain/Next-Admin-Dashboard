export type QuestionAnswer = {
  id: string
  question: string
  answer: string
}
export type FaqType = {
  id: string
  title: string
  subtitle: string
  icon: string
  questionsAnswers: QuestionAnswer[]
}

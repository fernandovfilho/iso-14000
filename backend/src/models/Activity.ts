import connection from '../database/connection'

class ActivityModel {
    title: String
    description: String
    environment: String
    contaminationType: String
    level: String
    value: Number
    unit: String

    constructor(activity?: {
        title
        description
        environment
        contaminationType
        level
        value
        unit
    }) {
        if (activity) {
            this.title = activity.title
            this.description = activity.description
            this.environment = activity.environment
            this.contaminationType = activity.contaminationType
            this.level = activity.level
            this.value = activity.value
            this.unit = activity.unit
        }
    }

    public async save(): Promise<string> {
        const [id] = await connection('activities').insert(this)
        return id
    }

    public async list(): Promise<{ count: number; activities: Array<object> }> {
        const [count] = await connection('activities').count()

        const activities = await connection('activities').select()

        return { count, activities }
    }
}

export default ActivityModel

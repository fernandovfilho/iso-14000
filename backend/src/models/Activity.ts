import connection from '../database/connection'
import moment from 'moment'

class ActivityModel {
    id: Number
    title: String
    description: String
    environment: String
    contaminationType: String
    level: String
    value: Number
    unit: String

    constructor(activity?: {
        id
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
            if (activity.id) this.id = activity.id
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

    public async update(): Promise<boolean> {
        try {
            await connection('activities')
                .update(this.toJson())
                .where({ id: this.id })
            return true
        } catch (error) {
            console.log('error', error)
            return false
        }
    }

    private toJson() {
        return {
            title: this.title,
            description: this.description,
            environment: this.environment,
            contaminationType: this.contaminationType,
            level: this.level,
            value: this.value,
            unit: this.unit,
            updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
    }
}

export default ActivityModel

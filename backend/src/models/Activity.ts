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
        title: String
        description: String
        environment: String
        contaminationType: String
        level: String
        value: Number
        unit: String
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

    public async update(): Promise<boolean> {
        try {
            const id = await connection('activities')
                .update(this.toJson())
                .where({ id: this.id })
            if (id) return true
            throw 'Update Error'
        } catch (error) {
            return false
        }
    }

    public async delete(): Promise<boolean> {
        try {
            const count = await connection('activities')
                .del()
                .where({ id: this.id })
            if (count) return true
            throw 'Delete error'
        } catch (error) {
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

type Skill = 'Bash' | 'Counter' | 'Healing'

interface Character {
    name: string
    hp: number
    skills: Skill[]
    hometown?: string
}

const strider: Character = {
    name: 'Strider',
    hp: 200,
    skills: ['Bash'],
}

strider.hometown = "Rivendell"

console.table(strider)

export {}
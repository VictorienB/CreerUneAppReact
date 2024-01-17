import DefaultPicture from '../../assets/profile.png'
 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]
{freelanceProfiles.map((profile, index) => (
    <Card
        key={`${profile.name}-${index}`}
        label={profile.jobTitle}
        picture={profile.picture}
        title={42}
    />
))}
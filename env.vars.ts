export const commonVar = ():any => {
    switch (process.env.NEXT_PUBLIC_APP) {
    case 'usersight':
        return {
            webTitle: 'UserSight',
            shortName: 'US',
            brandName: 'UserSight',
            logoSource: '/assets/usersight_icon.png',
            loadingIconSource: '/assets/spiner.gif',
            nonUserString: 'NON-USER-SIGHT USER',
            faviconSource: '/userSight.ico',
            brandSubString: '- UserSight by originally.us',
        }
    default:
        return {
            webTitle: 'UserSight',
            shortName: 'US',
            brandName: 'UserSight',
            logoSource: '/assets/usersight_icon.png',
            loadingIconSource: '/assets/spiner.gif',
            nonUserString: 'NON-USER-SIGHT USER',
            faviconSource: '/userSight.ico',
            brandSubString: '- UserSight by originally.us',
        }
    }
}

export const envVar = commonVar()

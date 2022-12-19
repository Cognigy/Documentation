/**
 * Helper function to generate the database uri.
 * @param database
 * @returns string
 */
export const generate_db_uri = (database: string = "documentation_index"): string => {
    const host = <string>process.env.MONGODB_HOST || "localhost"
    const port = <string>process.env.MONGODB_PORT || "27017"
    const user = <string>process.env.MONGODB_USER || ""
    const pass = <string>process.env.MONGODB_PASS || ""
    let connectionString = ''

    if (user != "" && pass != "") {
        connectionString = `mongodb://${user}:${pass}@${host}:${port}/${database}`
    }
    else {
        connectionString = `mongodb://${host}:${port}/${database}`
    }

    return connectionString
}
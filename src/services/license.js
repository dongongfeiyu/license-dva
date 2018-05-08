import request from "utils/request"

export async function queryList(params) {
    return request("/api/apply/list",{
        method: "POST",
        body: params
    })
}
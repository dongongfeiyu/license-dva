/**
 * Created by Zhang Haijun on 2018/7/16.
 */
import request from "utils/request"
export async function login(params) {
  return request("/api/login",{
    method: "POST",
    body: params
  })
}

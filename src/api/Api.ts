/* eslint-disable */
import axios from "axios";
import request from "./Request";

/**
 * 账号密码登录API
 * @param {object} params 参数
 * @constructor
 */
export const userLogin = (params: { email: string; password: string }) =>
	request("/auth/login", params, "POST", true);


/**
 * 注册账号API
 * @param {object} params 参数
 * @constructor
 */
export const SignUpApi = (params: {
	name: string;
	email: string;
	password: string;
}) => request("/auth/signup", params, "POST", true);


/**
 * 获取token API
 * @param {object} params 参数
 * @constructor
 */
export const GetTokenApi = (params: { code: string }) =>
	request("/auth/get-token", params, "POST", true);

/**
 * 获取用户数据API
 * @param {object} params 参数
 * @constructor
 */
export const getUserApi = (params?: Partial<{ id: string }>) =>
	request("/user/me", params, "GET", true);

// 获取聊天记录列表
export const getUserAllConversationSummary = (
	params?: Partial<{
		id: string;
	}>
) => request("/api/v1/conversations/summary", params, "GET");

// 删除聊天记录列表
export const deleteConversation = (
	params?: Partial<{
		id: string | number;
	}>
) => request(`/api/v1/conversation/${params?.id}`, params, "DELETE");

// 创建聊天记录
export const createConversation = (
	params?: Partial<{
		userId: string | number;
		title: string;
		date: string;
		deleted: boolean;
		messages: object;
	}>
) => request("/api/v1/conversation", params, "POST");

// 获取聊天记录详情
export const getConversation = (
	params?: Partial<{
		id: string | number;
	}>
) => request(`/api/v1/conversation/${params?.id}`, params, "GET");

// 附加聊天记录消息
export const appendMessage = (
	params?: Partial<{
		id: string | number;
	}>
) => request(`/api/v1/conversation/${params?.id}`, params, "PUT");

// 分片上传文件
export const uploadChunkedFile = (formData: FormData) => {
	return request(`/file/upload`, formData, "POST");
};

// 合并分片上传文件
export const mergeFile = (formData: FormData) => {
	return request(`/file/merge`, formData, "POST");
};

// 下载文件
export const downloadFile = (
	params?: Partial<{
		fileName: string;
	}>
) => request(`/file/download`, params, "GET");

const OAUTH2_REDIRECT_URI = "http://localhost:3000";

// google login
export const GoogleLoginUrl = () =>
	request(
		"/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI,
		{},
		"POST"
	);

export const VerifyEmailApi = (
	params: Partial<{
		email: string;
		code: string;
	}>
) => request("/auth/verify/check", params, "POST", true);

export const TriggerEmailApi = (
	params: Partial<{
		email: string;
	}>
) => request("/auth/verify/send", params, "POST", true);

export const ResetPasswordApi = (
	params: Partial<{
		email: string;
		code: string;
		password: string;
	}>
) => request("/auth/resetPassword", params, "POST");

export const GetSessionIdApi = () =>
	request("/ws-session-key/get-session-key", {}, "POST");

export const SendQAFeedback = (
	params: Partial<{
		likeDislike: number;
		context: object;
	}>
) => request("/custom-log/like-dislike", params, "POST");

// log status
export const SendStatusFeedback = (
	params: Partial<{
		status: object;
		context: object;
	}>
) => request("/custom-log/json-submit", params, "POST");

// 更多数据下载
export const GetQuote = (
	params: Partial<{
		tag: string;
		amount: number;
	}>
) => request("/api/v1/data/quote", params, "POST");

export const DownMoreData = (
	params: Partial<{
		tag?: string;
		email: string;
		amount: number;
		userPrompt?: string;
		imageUrl?: any
	}>
) => request("/api/v1/data/download", params, "POST");


export const TmpUpload = (
	params: Partial<{
		tag: string;
		email: string;
		amount: number;
		userPrompt: string;
	}>
) => request("/file/tmp-upload", params, "POST");

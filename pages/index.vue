<template>
	<div class="index-container">
		<img src="@/static/icon.png" width="64px" alt="icon" />
		<h1>請支援貼圖</h1>
		<div class="cu chat" data-style="telegram" ref="printMe">
			<div class="message text read">
				<div class="avatar">
					<img
						:src="avatar||'https://avatars.githubusercontent.com/u/16719720?s=460&u=3840af5115bb889cea5e8fa242b4e10b5ad3ab55&v=4'"
						alt="avatar"
					/>
				</div>
				<div class="content">
					<div class="author" :style="{color:nameColor}">
						{{name}}
						<div class="admin" v-if="admin">{{admin}}</div>
					</div>
					<v-expand-transition>
						<div class="reply" v-if="reply.active">
							<div class="author">{{reply.name}}</div>
							<div class="content">
								<div class="text">{{reply.text}}</div>
							</div>
						</div>
					</v-expand-transition>
					<div class="text" v-if="text">
						<p v-html="text.replace(/\n/g,'<br>')" />
					</div>
					<div class="meta" v-if="time">
						<div class="item">{{time}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block">
			<h4 style="text-align:left">User Info Source</h4>
			<v-radio-group v-model="userInfoSource" row>
				<v-radio label="fetch from telegram" value="telegram"></v-radio>
				<v-radio label="custom" value="custom"></v-radio>
			</v-radio-group>
			<template v-if="userInfoSource=='telegram'">
				<v-text-field
					v-model="username"
					label="username"
					:loading="usernameFetching"
					@change="fetchUserInfo"
				></v-text-field>
			</template>
			<template v-if="userInfoSource=='custom'">
				<v-file-input accept="image/*" label="avatar" v-model="avatarFile" />
				<v-text-field v-model="name" label="name"></v-text-field>
			</template>
		</div>
		<div class="block">
			<h4 style="text-align:left">Message</h4>
			<v-text-field v-model="admin" label="admin"></v-text-field>
			<v-textarea v-model="text" label="text"></v-textarea>
			<v-text-field v-model="time" label="time"></v-text-field>
		</div>
		<div class="block">
			<h4 style="text-align:left">Reply</h4>
			<v-checkbox v-model="reply.active" color="red" label="reply"></v-checkbox>
			<v-expand-transition>
				<div v-show="reply.active">
					<v-text-field color="red" v-model="reply.name" label="reply name"></v-text-field>
					<v-text-field color="red" v-model="reply.text" label="reply text"></v-text-field>
				</div>
			</v-expand-transition>
		</div>
		<a class="wr-btn" @click="print">產生</a>

		<v-dialog v-model="resultDialog" width="500">
			<v-card>
				<v-card-title>Result</v-card-title>
				<v-card-text>
					<div class="output-container" v-if="output">
						<img :src="output" alt="output-img" />
					</div>
					<div>長按圖片或點擊下載來儲存</div>
				</v-card-text>
				<v-card-actions>
					<v-btn
						color="primary"
						text
						@click="outputFile = false"
						:href="output"
						:download="`${name}_${text}.png`"
					>Download</v-btn>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="resultDialog = false">close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>
<style lang="sass" scoped>
.index-container
	text-align: center
	margin: 0 auto
	max-width: 512px
	padding: 0 16px
	.cu.chat
		width: 256px
		max-width: 256px
		text-align: left
		overflow: hidden
	.block
		background: #fcfaff
		color: #1976d2
		margin: 8px 0
		padding: 0 16px
		padding-top: 4px
		border-radius: 4px
</style>
<style lang="sass">
.output-container
	background-color: #ffdbdb
	border-radius: 4px
	img
		width: 100%
</style>
<script>
export default {
	data: () => ({
		userInfoSource: 'telegram',
		username: 'gnehs_OwO',
		usernameFetching: false,
		avatar: null,
		avatarFile: null,
		name: 'gnehs',
		nameColor: 'rgb(20, 177, 62)',
		admin: '可愛勝勝',
		reply: {
			active: false,
			name: 'name',
			text: 'text'
		},
		text: '請支援貼圖',
		time: '12:34',
		output: null,
		resultDialog: false
	}),
	watch: {
		avatarFile() {
			const reader = new FileReader();
			reader.onloadend = () => {
				// log to console
				// logs data:<type>;base64,wL2dvYWwgbW9yZ...
				this.avatar = (reader.result);
			};
			reader.readAsDataURL(this.avatarFile)
		}
	},
	methods: {
		async print() {
			const el = this.$refs.printMe;
			// add option type to get the image version
			// if not provided the promise will return 
			// the canvas.
			const options = {
				type: 'dataURL',
				backgroundColor: null,
				useCORS: true,
				scale: 2,
			}
			this.output = await this.$html2canvas(el, options);
			this.resultDialog = true
		},
		async fetchUserInfo() {
			this.usernameFetching = true
			const { name, img } = await fetch(`https://tg-info.gnehs.workers.dev/${this.username.replace('@', '')}`).then(x => x.json())
			this.name = name
			this.avatar = img
			this.usernameFetching = false
		}
	}
};
</script>

<template>
	<div class="index-container">
		<img src="@/static/icon.png" width="64px" alt="icon" />
		<h1>請支援貼圖</h1>
		<div class="cu chat" data-style="telegram">
			<div class="message text read" ref="printMe">
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
			<h4 style="text-align:left">User Info</h4>
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
		<a class="wr-btn" @click="print">Generate</a>
		<v-divider style="margin: 10px 0" />
		<p style="opacity: .7;font-size: .85em">
			Developed by
			<a href="https://gnehs.net" target="_blank">gnehs</a> |
			<a href="https://github.com/gnehs/tg-message-sticker" target="_blank">GitHub</a>
		</p>
		<v-dialog v-model="resultDialog" width="500">
			<v-card>
				<v-card-title>Result</v-card-title>
				<v-card-text>
					<div class="output-container" v-if="output.svg">
						<img :src="output.svg" alt="output-img" />
					</div>
					<div v-else style="text-align:center;margin: 20px 0;">
						<v-progress-circular indeterminate color="primary" />
					</div>
					<div v-if="output.svg">Long press the image or click download to save.</div>
				</v-card-text>
				<v-card-actions>
					<v-btn
						color="primary"
						text
						v-show="output.png"
						:href="output.png"
						:download="`${name}_${text}.png`"
					>.png</v-btn>
					<v-btn
						color="primary"
						text
						v-show="output.svg"
						:href="output.svg"
						:download="`${name}_${text}.svg`"
					>.svg</v-btn>
					<v-btn
						color="primary"
						text
						v-show="output.webp"
						:href="output.webp"
						:download="`${name}_${text}.webp`"
					>.webp</v-btn>
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
	margin-top: 32px
	.cu.chat
		text-align: left
		.message
			padding: 4px
			margin: 0
	.block
		background: #fff
		color: #1976d2
		margin: 8px 0
		padding: 0 16px
		padding-top: 8px
		border-radius: 4px
		border: 1px solid #1976d23b
</style>
<style lang="sass">
.output-container
	background-color: #f3f3f3
	border-radius: 4px
	padding: 4px
	img
		width: 100%
</style>
<script>
import domtoimage from 'dom-to-image';
export default {
	data: () => ({
		userInfoSource: 'telegram',
		username: 'gnehs_OwO',
		usernameFetching: false,
		avatar: null,
		avatarFile: null,
		name: 'gnehs',
		nameColor: 'rgb(20, 177, 62)',
		admin: '',
		reply: {
			active: false,
			name: 'name',
			text: 'text'
		},
		text: '請支援貼圖',
		time: '12:34',
		output: { svg: null, webp: null, png: null },
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
		},
		name() {
			let pickRandom = arr => arr[Math.floor(Math.random() * arr.length)]
			let colorList = ['#c75650', '#d57b27', '#7e6ccf', '#4fb231', '#2ea4ca']
			this.nameColor = pickRandom(colorList)
		}
	},
	methods: {
		async print() {
			this.resultDialog = true
			this.output = { svg: null, webp: null, png: null }
			const el = this.$refs.printMe;
			const svgImage = document.createElement('img')
			this.output.svg = await domtoimage.toSvg(el)
			svgImage.src = this.output
			// resize
			const canvas = document.createElement("canvas");
			const h = 512 / svgImage.width * svgImage.height
			canvas.setAttribute('width', 512);
			canvas.setAttribute('height', h);
			canvas.getContext('2d').drawImage(svgImage, 0, 0, canvas.width, canvas.height);
			this.output.png = canvas.toDataURL();
			this.output.webp = canvas.toDataURL('image/webp');
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
